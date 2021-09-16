import { renderSync } from "sass";

export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}