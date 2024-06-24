import SoftwareArchitect from './SoftwareArchitect';
import FullStackDeveloper from './FullStackDeveloper';
import QualityAssuranceEngineer from './QualityAssuranceEngineer';

class AgentManager {
  constructor() {
    this.agents = {
      softwareArchitect: new SoftwareArchitect(),
      fullStackDeveloper: new FullStackDeveloper(),
      qualityAssuranceEngineer: new QualityAssuranceEngineer()
    };
  }

  assignTasks() {
    console.log("Assigning tasks to agents...");
    this.agents.softwareArchitect.designArchitecture();
    this.agents.fullStackDeveloper.implementFrontend();
    this.agents.fullStackDeveloper.implementBackend();
    this.agents.qualityAssuranceEngineer.testSystem();
    this.agents.qualityAssuranceEngineer.reportBugs();
  }
}

export default AgentManager;