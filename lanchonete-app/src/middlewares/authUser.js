import { Jwt } from "jsonwebtoken";

export function verificaToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }

    jwt.verify(token, 'segredo', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }

        req.userId = decoded.id;
        next();
    });
}
