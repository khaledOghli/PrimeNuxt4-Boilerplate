import { execSync } from 'node:child_process';

// Function to check if the installed pnpm version is the latest
async function isPnpmLatest() {
  try {
    const installedVersion = execSync('pnpm -v').toString().trim();
    const latestVersion = execSync('npm show pnpm version').toString().trim();
    return installedVersion === latestVersion;
  }
  catch (error) {
    console.error('Error checking pnpm version:', error);
    return false;
  }
}

// Main function to handle installation
async function install() {
  try {
    if (!(await isPnpmLatest())) {
      console.log('pnpm is not the latest version. Please update pnpm.');
      return;
    }

    console.log('Installing dependencies using pnpm...');
    execSync('corepack use pnpm@`pnpm -v` && pnpm i', { stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
  }
  catch (error) {
    console.error('Error installing dependencies:', error);
  }
}

// Run the installation process
install();
