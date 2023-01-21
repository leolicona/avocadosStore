import { NextApiRequest, NextApiResponse } from "next"
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse ) => {
    const db = new DB();
    const id = request.query.id
    const product = await db.getById(id as string);
    response.status(200).json({product})

}

export default allAvos; 