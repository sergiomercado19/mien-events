import { Request, Response } from 'express';

exports.getAllEvents = (request: Request, response: Response) => {
  const events = [
    {
      'id': '1',
      'title': 'Event 1',
      'description': 'Short description',
      'location': 'Sydney'
    },
    {
      'id': '2',
      'title': 'Event 2',
      'description': 'Short description',
      'location': 'Melbourne'
    }
  ]
  return response.json(events);
}