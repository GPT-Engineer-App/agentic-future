class Sandbox {
  constructor() {
    this.files = {};
    this.commands = [];
    this.browsingHistory = [];
  }

  // File management methods
  createFile(filename, content) {
    if (this.files[filename]) {
      throw new Error(`File ${filename} already exists.`);
    }
    this.files[filename] = content;
  }

  readFile(filename) {
    if (!this.files[filename]) {
      throw new Error(`File ${filename} does not exist.`);
    }
    return this.files[filename];
  }

  updateFile(filename, content) {
    if (!this.files[filename]) {
      throw new Error(`File ${filename} does not exist.`);
    }
    this.files[filename] = content;
  }

  deleteFile(filename) {
    if (!this.files[filename]) {
      throw new Error(`File ${filename} does not exist.`);
    }
    delete this.files[filename];
  }

  // Terminal command methods
  executeCommand(command) {
    // For simplicity, we'll just log the command
    this.commands.push(command);
    console.log(`Executing command: ${command}`);
  }

  // Browsing methods
  browse(url) {
    // For simplicity, we'll just log the URL
    this.browsingHistory.push(url);
    console.log(`Browsing URL: ${url}`);
  }

  // Method to clear the sandbox
  clear() {
    this.files = {};
    this.commands = [];
    this.browsingHistory = [];
  }
}

export default Sandbox;