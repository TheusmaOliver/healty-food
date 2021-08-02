import * as yup from 'yup';


export default yup.object().shape({
    name: yup.string().min(2, 'Too Short!').max(50,'Too Long!').required('Required'),
    data: yup.date().required(),
    cpf: yup.string().required(),
    cep: yup.number().min(5).required(),
    log: yup.string().required(),
    bairro: yup.string().required(),
    complemento: yup.string().notRequired(),
    cidade: yup.string().required(),
    uf: yup.string().required()
})