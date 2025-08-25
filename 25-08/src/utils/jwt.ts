import jwt from 'jsonwebtoken'

interface Payload {
  id: number
  email: string
}

export const generateToken = (payload: Payload) => {
    //metodo sign retorna token
    //envia informações de usuario
    //envia secret
    //e tempo de expiração
  return jwt.sign(payload, process.env.JWT_SECRET!, 
    {expiresIn: Number(process.env.JWT_EXPIRES_IN)})
}

export const verifyToken = (token:string) => {
  try{
    // valida o token que estamos passando
    // se for valido retorna as informações decodificadas do payload (no nosso caso id e email)
    return jwt.verify(token, process.env.JWT_SECRET!)
  }catch(err:any){
    //se não for valido retorna null
    return null;
  }
}