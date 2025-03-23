// src/App.tsx - FIXED VERSION
import React, { useState } from 'react';
import { TreeDataProvider } from './contexts/TreeDataContext';
import PriorityTree from './components/PriorityTree';
import PersistenceService from './services/PersistenceService';
import { Save, Upload, Trash2 } from 'lucide-react';
import OnboardingManager from './components/onboarding/OnboardingManager';

const App: React.FC = () => {
  const [importStatus, setImportStatus] = useState<string | null>(null);
  
  const handleExport = () => {
    // Don't try to access the context directly from App component
    // Just trigger the export from localStorage directly
    PersistenceService.exportToJson(
      JSON.parse(localStorage.getItem('priorityTreeCommitments') || '{}'),
      'priority-tree-data.json'
    );
  };
  
  const handleImport = async () => {
    setImportStatus('Importing...');
    const commitments = await PersistenceService.importFromJson();
    
    if (commitments) {
      setImportStatus('Import successful! Refresh the page to see changes.');
      // We'll handle the data import in a more sophisticated way in later phases
    } else {
      setImportStatus('Import failed. Please check the file format.');
    }
    
    // Clear the status message after 3 seconds
    setTimeout(() => {
      setImportStatus(null);
    }, 3000);
  };
  
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      PersistenceService.clearAllData();
      window.location.reload();
    }
  };
  
  return (
    <TreeDataProvider>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <header className="p-4 bg-gray-800 flex justify-between items-center">
          <h1 className="text-xl text-white font-mono font-bold">Priority Tree</h1>
          
          <div className="flex gap-2">
            <button 
              onClick={handleExport}
              className="p-2 bg-blue-600 text-white rounded flex items-center gap-1 export-button"
            >
              <Save size={16} />
              <span>Export</span>
            </button>
            
            <button 
              onClick={handleImport}
              className="p-2 bg-green-600 text-white rounded flex items-center gap-1"
            >
              <Upload size={16} />
              <span>Import</span>
            </button>
            
            <button 
              onClick={handleClear}
              className="p-2 bg-red-600 text-white rounded flex items-center gap-1"
            >
              <Trash2 size={16} />
              <span>Clear</span>
            </button>
          </div>
        </header>
        
        {importStatus && (
          <div className="bg-blue-500 text-white p-2 text-center">
            {importStatus}
          </div>
        )}
        
        <main className="flex-grow">
          <PriorityTree />
        </main>
        
        <footer className="p-2 bg-gray-800 text-white text-center text-xs">
          Priority Tree - A tool for balanced life commitments
        </footer>
        
        {/* Onboarding & Documentation Manager */}
        <OnboardingManager />
      </div>
    </TreeDataProvider>
  );
};

export default App;
