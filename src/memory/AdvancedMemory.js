class AdvancedMemory {
  constructor() {
    this.memory = {};
  }

  store(key, value) {
    this.memory[key] = value;
  }

  retrieve(key) {
    return this.memory[key];
  }

  getAllMemory() {
    return this.memory;
  }
}

export default AdvancedMemory;