import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'


export async function POST(req, res){
  try{
    const { name, email, message } = await req.body;
    
  }
}