import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    first: string
    last: string
    bday: any
    email: string
    status: string
    address: {
        street: string
        city: string
        state: string
        zip: string
        country: string
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.last || !body.bday || !body.email || !body.status) {
        // Sends a HTTP bad request error code
        return res.status(400).json({
            first: `${body.first}`,
            last: `${body.last}`,
            bday: `${body.bday}`,
            email: `${body.email}`,
            status: `${body.status}`,
            address: { 
                street: `${body.address[0].street}`,
                city: `${body.address[0].city}`,
                state: `${body.address[0].state}`,
                zip: `${body.address[0].zip}`,
                country: `${body.address[0].country}`,
            }
        })
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({
        first: `${body.first}`,
        last: `${body.last}`,
        bday: `${body.bday}`,
        email: `${body.email}`,
        status: `${body.status}`,
        address: { 
            street: `${body.address[0].street}`,
            city: `${body.address[0].city}`,
            state: `${body.address[0].state}`,
            zip: `${body.address[0].zip}`,
            country: `${body.address[0].country}`,
        }
    })
}