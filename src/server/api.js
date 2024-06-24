import express from 'express';
import { executeCommand } from './executeCommand.js';

const router = express.Router();

router.post('/execute', async (req, res) => {
  const { command } = req.body;
  try {
    const output = await executeCommand(command);
    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: 'Failed to execute command' });
  }
});

export default router;