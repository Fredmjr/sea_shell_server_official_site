//muiple file creating in specific folder function

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createSolutionsFiles = () => {
  const targetDir = path.join(__dirname, 'views', 'components', 'links', 'solutions');
  
  const fileNames = [
    'Data Integrity & Authenticity',
    'Data Loss Prevention (DLP)',
    'Immutable Storage',
    'Continuous Data Protection (CDP)',
    'Secure Data Migration',
    'Data Sovereignty & Compliance',
    'Digital Forensics'
  ];

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fileNames.forEach(name => {
    const formattedName = name
      .toLowerCase()
      .trim()
      .replace(/&/g, '')           // Remove &
      .replace(/[^a-z0-9]/g, '_')   // Replace non-alphanumeric chars (spaces, brackets) with underscores
      .replace(/__+/g, '_')        // Collapse multiple underscores into one
      .replace(/^_|_$/g, '')       // Trim underscores from start or end
      + '.hbs';

    const filePath = path.join(targetDir, formattedName);

    fs.writeFileSync(filePath, '');
    console.log(`Created: ${formattedName}`);
  });
};

createSolutionsFiles();
