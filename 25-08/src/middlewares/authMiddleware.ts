import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

// Middleware para proteger rotas que exigem autenticação
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Pega o header de autorização da requisição
  const authHeader = req.headers.authorization

  // Se não houver header ou ele não começar com "Bearer ", retorna erro 401 (não autorizado)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' })
  }

  // Extrai o token do header (remove o "Bearer " antes)
  const token = authHeader.split(' ')[1]

  // Verifica se o token é válido chamando a função verifyToken
  // Retorna o payload decodificado se válido, ou null se inválido/expirado
  const decoded = verifyToken(token)

  // Se o token for inválido, retorna erro 401
  if (!decoded) {
    return res.status(401).json({ message: 'Token inválido' })
  }

  // Armazena o payload decodificado no req para que outros middlewares ou controllers possam acessar
  // Ex.: req.user terá id e email do usuário logado
  // o tipo request n tem propriedade .user
  // o ts reclama quando faz req.user = ...
  // para "enganar" o ts usamos um type assertion (... as any)
  // type assertion foça o compilador a tratar o valor como se fosse qualquer outro tipo
  // em '.user' estamos criando então uma nova propriedadde chamada user dentro do objeto 'req'
  // decoded é o payload que saiu do verifytoken(token) na linha 19
  // req.user pode ser usado mais tarde para:
  //  - Saber quem ta logado. exemplo: /me retorna dados do usuario logado usando req.user.id.
  //  - Verificar permissões. Exemplo: só um usuario com role: "adm" pode acessar certas rotas
  //  - associar recursos com usuario logado. Exemplo: criar um post  automaticament ligado ao req.user.id. Não precisa mandar userId no body.
  (req as any).user = decoded

  // Chama o próximo middleware ou controller
  next()
}
