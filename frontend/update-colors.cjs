#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all .jsx files
function findJsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findJsxFiles(filePath));
    } else if (file.endsWith('.jsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Color mappings for consistency
const colorReplacements = [
  // Primary brand colors - Blue to Purple gradients
  {
    from: /from-blue-500 to-purple-600/g,
    to: 'from-blue-600 to-purple-600'
  },
  {
    from: /from-blue-600 via-purple-600 to-pink-600/g,
    to: 'from-blue-600 to-purple-600'
  },
  {
    from: /from-purple-600 via-pink-600 to-blue-600/g,
    to: 'from-blue-600 to-purple-600'
  },
  
  // Secondary colors - Indigo to Blue
  {
    from: /from-indigo-500 to-purple-500/g,
    to: 'from-indigo-600 to-blue-600'
  },
  
  // Success colors - Green to Emerald
  {
    from: /from-green-500 to-emerald-500/g,
    to: 'from-emerald-500 to-teal-500'
  },
  {
    from: /from-green-400 to-emerald-500/g,
    to: 'from-emerald-500 to-teal-500'
  },
  
  // Warning colors - Amber to Orange
  {
    from: /from-yellow-400 to-orange-500/g,
    to: 'from-amber-500 to-orange-500'
  },
  {
    from: /from-amber-400 to-orange-400/g,
    to: 'from-amber-500 to-orange-500'
  },
  
  // Error colors - Red to Pink
  {
    from: /from-red-500 to-red-600/g,
    to: 'from-red-500 to-pink-500'
  },
  {
    from: /from-orange-500 to-red-500/g,
    to: 'from-red-500 to-pink-500'
  },
  
  // Background colors
  {
    from: /from-blue-50 via-indigo-50 to-purple-50/g,
    to: 'from-blue-50 to-purple-50'
  },
  {
    from: /from-purple-50 to-pink-50/g,
    to: 'from-blue-50 to-purple-50'
  },
  
  // Text colors consistency
  {
    from: /text-purple-500/g,
    to: 'text-blue-600'
  },
  {
    from: /text-blue-500/g,
    to: 'text-blue-600'
  }
];

// Function to apply color consistency
function applyColorConsistency(content) {
  let updatedContent = content;
  
  colorReplacements.forEach(replacement => {
    updatedContent = updatedContent.replace(replacement.from, replacement.to);
  });
  
  return updatedContent;
}

// Main function
function updateColors() {
  const srcDir = 'd:/twuc/frontend/src';
  const jsxFiles = findJsxFiles(srcDir);
  
  let totalFilesProcessed = 0;
  let totalChanges = 0;
  
  jsxFiles.forEach(filePath => {
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const updatedContent = applyColorConsistency(originalContent);
      
      if (originalContent !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        totalChanges++;
        console.log(`✅ Updated colors: ${path.relative(srcDir, filePath)}`);
      }
      
      totalFilesProcessed++;
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`\n🎨 Color consistency update complete!`);
  console.log(`📁 Files processed: ${totalFilesProcessed}`);
  console.log(`🔧 Files modified: ${totalChanges}`);
}

updateColors();
