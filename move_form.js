import fs from 'fs';

function moveSection(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all sections
  const sectionStarts = [...content.matchAll(/<section/g)].map(m => m.index);
  const sectionEnds = [...content.matchAll(/<\/section>/g)].map(m => m.index + 10);
  
  // Build sections array
  let sections = [];
  for (let i = 0; i < sectionStarts.length; i++) {
    let s = sectionStarts[i];
    let nextS = i + 1 < sectionStarts.length ? sectionStarts[i+1] : content.length;
    let e = -1;
    for (let j = 0; j < sectionEnds.length; j++) {
      if (sectionEnds[j] > s && sectionEnds[j] < nextS) {
        e = sectionEnds[j];
      }
    }
    
    if (e !== -1) {
      sections.push({
        start: s,
        end: e,
        content: content.substring(s, e),
        hasForm: content.substring(s, e).includes('<ContactForm')
      });
    }
  }
  
  const formSectionIndex = sections.findIndex(sec => sec.hasForm);
  if (formSectionIndex === -1) {
      console.log('No form section found in ' + filePath);
      return;
  }
  if (formSectionIndex === 1) {
      console.log('Form section is already after hero in ' + filePath);
      return;
  }
  
  const heroSection = sections[0];
  const formSection = sections[formSectionIndex];
  
  let contentWithoutForm = content.substring(0, formSection.start) + content.substring(formSection.end);
  let newContent = contentWithoutForm.substring(0, heroSection.end) + '\n\n' + formSection.content + '\n' + contentWithoutForm.substring(heroSection.end);
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Successfully updated ' + filePath);
}

moveSection('src/pages/Home.tsx');
moveSection('src/pages/projects/Ajaza.tsx');
moveSection('src/pages/projects/Creeks.tsx');
