const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove qualquer caractere não numérico

    if (cpf.length !== 11) {
        return false; // CPF deve ter 11 dígitos
    }

    // Verifica se todos os dígitos são iguais (exemplo: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Valida o primeiro dígito verificador
    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Valida o segundo dígito verificador
    soma = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

// Endpoint para validar CPF
app.post('/validar-cpf', (req, res) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(400).json({ error: 'CPF não informado' });
    }

    const isValid = validarCPF(cpf);

    if (isValid) {
        return res.status(200).json({ message: 'CPF válido' });
    } else {
        return res.status(400).json({ message: 'CPF inválido' });
    }
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
