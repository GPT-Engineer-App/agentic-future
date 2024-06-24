import { HfInference } from '@huggingface/inference';

const hf = new HfInference('YOUR_HUGGINGFACE_API_KEY');

export const fetchModel = async (modelId) => {
  try {
    const model = await hf.model(modelId);
    return model;
  } catch (error) {
    console.error('Error fetching model:', error);
    throw error;
  }
};