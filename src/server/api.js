import express from 'express';
import { executeCommand } from './executeCommand.js';
import DOMPurify from 'dompurify';

const router = express.Router();

router.post('/execute', async (req, res) => {
  const { command } = req.body;
  try {
    const sanitizedCommand = DOMPurify.sanitize(command);
    const output = await executeCommand(sanitizedCommand);
    res.json({ output: DOMPurify.sanitize(output) });
  } catch (error) {
    console.error('Error executing command:', error);
    res.status(500).json({ error: 'Failed to execute command' });
  }
});

export default router;