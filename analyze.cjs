const fs = require('fs');

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n\n--- Analyzing ${filePath} ---`);
  
  // Find all <section tags
  const sectionStarts = [...content.matchAll(/<section/g)].map(m => m.index);
  
  // Also find </section> tags
  const sectionEnds = [...content.matchAll(/<\/section>/g)].map(m => m.index);
  
  // We need to pair them up
  let sections = [];
  let depth = 0;
  let startIdx = -1;
  
  // A simple regex approach won't handle nesting properly, but assuming they are not nested:
  for (let i=0; i<sectionStarts.length; i++) {
     let s = sectionStarts[i];
     let nextS = i + 1 < sectionStarts.length ? sectionStarts[i+1] : content.length;
     // find the last </section> before nextS
     let e = -1;
     for (let j=0; j<sectionEnds.length; j++) {
         if (sectionEnds[j] > s && sectionEnds[j] < nextS) {
             e = sectionEnds[j];
         }
     }
     
     if (e !== -1) {
         let sectionContent = content.substring(s, e + 10);
         let idMatch = sectionContent.match(/id="([^"]+)"/);
         let id = idMatch ? idMatch[1] : 'no-id';
         
         let hasContactForm = sectionContent.includes('<ContactForm');
         let hasSlider = sectionContent.includes('<TheOneAlexSlider');
         
         let startLine = content.substring(0, s).split('\n').length;
         let endLine = content.substring(0, e).split('\n').length;
         
         console.log(`Section [Lines ${startLine} - ${endLine}] ID: ${id} | HasContactForm: ${hasContactForm} | HasSlider: ${hasSlider}`);
     } else {
         let startLine = content.substring(0, s).split('\n').length;
         console.log(`Section [Lines ${startLine} - ???]`);
     }
  }
}

analyzeFile('src/pages/Home.tsx');
analyzeFile('src/pages/projects/Ajaza.tsx');
analyzeFile('src/pages/projects/Creeks.tsx');
