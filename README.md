# **API para validação de CPF**

Esta é uma API simples desenvolvida com Node.js e Express para validar CPFs.

## **Como usar**

Envie um `POST` para o endpoint `/validar-cpf` com um corpo JSON contendo o CPF.

### **Exemplo de requisição:**

```json
{
    "cpf": "12345678909"
}

### **Respostas possíveis:**
CPF válido:

json
Copiar
{
  "message": "CPF válido"
}
CPF inválido:

json
Copiar
{
  "message": "CPF inválido"
}
Erro se CPF não for informado:

json
Copiar
{
  "error": "CPF não informado"
}

Clone o repositório:

bash
Copiar
git clone https://github.com/SEU-USUARIO/api-validar-cpf.git
cd api-validar-cpf
Instale as dependências:

bash
Copiar
npm install
Rode a API:

bash
Copiar
node index.js
A API estará disponível em http://localhost:3000.
