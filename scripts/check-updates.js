const latestVersion = require('latest-version');
const chalk = require('chalk');
const { version } = require('../package.json');
const semver = require('semver');

const checkForUpdates = async () => {
  try {
    console.log('Checking for updates...');
    console.log('Current version:', version);
    
    const latest = await latestVersion('@tixia/design-system');
    console.log('Latest version:', latest);
    
    if (semver.gt(latest, version)) {
      const updateType = semver.diff(latest, version);
      const updateMessage = {
        major: '⚠️  Major update available - may include breaking changes!',
        minor: '✨ New features available!',
        patch: '🔧 Update available with bug fixes and improvements'
      }[updateType];

      console.log('\n' + chalk.yellow(updateMessage));
      console.log(chalk.gray('Current version: ') + chalk.red(version));
      console.log(chalk.gray('Latest version: ') + chalk.green(latest));
      console.log('\n' + chalk.blue('To update, run:'));
      console.log(chalk.cyan('npm install @tixia/design-system@latest'));
      console.log('\n' + chalk.gray('For more details, visit:'));
      console.log(chalk.cyan('https://github.com/your-org/design-system/releases'));
      console.log('\n');
    } else {
      console.log('No updates available');
    }
  } catch (error) {
    console.error('Error checking for updates:', error.message);
  }
};

checkForUpdates(); 