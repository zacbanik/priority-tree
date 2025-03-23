// src/services/PersistenceService.ts
import { CommitmentsMap } from '../contexts/TreeDataContext';

class PersistenceService {
  // Save the current state to a downloadable JSON file
  exportToJson(commitments: CommitmentsMap, filename = 'priority-tree-data.json'): void {
    const dataStr = JSON.stringify({ commitments }, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = filename;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
  
  // Create a file input and trigger it to load a JSON file
  importFromJson(): Promise<CommitmentsMap | null> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      
      input.onchange = (event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        
        if (!file) {
          resolve(null);
          return;
        }
        
        const reader = new FileReader();
        
        reader.onload = (e) => {
          try {
            const result = e.target?.result;
            if (typeof result === 'string') {
              const parsed = JSON.parse(result);
              if (parsed.commitments) {
                resolve(parsed.commitments);
              } else {
                resolve(null);
              }
            } else {
              resolve(null);
            }
          } catch (error) {
            console.error('Error parsing imported file:', error);
            resolve(null);
          }
        };
        
        reader.readAsText(file);
      };
      
      input.click();
    });
  }
  
  // Clear all stored data
  clearAllData(): void {
    localStorage.removeItem('priorityTreeCommitments');
  }
}

export default new PersistenceService();
