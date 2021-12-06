import axios from 'axios';
import connectDB from '../../../utils/connectDB'

connectDB()

export default async (req, res) {
    switch (req.method) {
        case "POST":
            await login(req, res)
            break;
    }
}

const login = async (req, res) => {
    try {
        const { email, pasword } = req.body

        const user = await axios.
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export async function getServerSideProps() {
    const req = await fetch("http://localhost:5000/login");
    console.log(req)
    const data = await req.json();

    return {
        props: { users: data }
    }
}