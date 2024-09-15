import axios from 'axios';

export const classifyImage = async (file) => {
  const encoded = await file.arrayBuffer().then((buffer) => Buffer.from(buffer).toString('base64'));

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Describe this image and provide skincare advice.',
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${encoded}`,
            },
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 1000,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};