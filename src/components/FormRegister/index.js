import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './FormRegister.css';
import schema from '../../utils/schema';


function FormRegister(){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const [message,setMessage] = useState("")
    const [changeSpan, setChangeSpan] = useState(false)


    function onBlurCep(event, setFieldValue){
        const { value } = event.target;

        const cep = value?.replace(/[^0-9]/g,'')
        
        if (cep?.length !== 8){
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data)=>{
                setFieldValue('log',data.logradouro)
                setFieldValue('bairro',data.bairro)
                setFieldValue('complemento',data.complemento)
                setFieldValue('cidade',data.localidade)
                setFieldValue('uf',data.uf)
            });

    }

   
    function onSubmit(values,onSubmitProps){
        users.push(values)
        localStorage.setItem('users',JSON.stringify(users))
        onSubmitProps.resetForm();
        setChangeSpan(true)
        setMessage('Cadastro efetuado com sucesso!')
    }

    return(
        <div id='cadastro'>
            
            <Formik
                validationSchema={schema}
                validateOnMount
                onSubmit={onSubmit}
                initialValues = {{
                    name:'',
                    data:'',
                    cpf:0,
                    cep:0,
                    log: '',
                    bairro: '',
                    complemento: '',
                    cidade: '',
                    uf:''
                }}
                render={({ values, setFieldValue })=>(

                    <Form >
                        <span className={ changeSpan ? 'success' : '' }>{message}</span>
                        <div>

                            <div className='form-group'>
                                <label htmlFor="name">Nome</label>
                                <Field  id="name" name="name" />
                                <ErrorMessage name="name" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="data">Data de nascimento</label>
                                <Field  id="data" name="data" type='date' />
                                <ErrorMessage name="data" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="cpf">CPF</label>
                                <Field  id="cpf" name="cpf" />
                                <ErrorMessage name="cpf" />
                            </div>

                            <div className='addres'>
                                <div className='form-group'>
                                    <label htmlFor="cep">CEP</label>
                                    <Field  id="cep" name="cep"  onBlur={(event)=> onBlurCep(event,setFieldValue)} />
                                    <ErrorMessage name="cep" />
                                </div>

                                <div className='coluna'>
                                    <div className='form-group'>
                                        <label htmlFor="log">Logradouro</label>
                                        <Field  id="log" name="log" />
                                        <ErrorMessage name="log" />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="bairro">Bairro</label>
                                        <Field  id="bairro" name="bairro"  />
                                        <ErrorMessage name="bairro" />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="complemento">Complemento</label>
                                    <Field  id="complemento" name="complemento"  />
                                </div>
                                <div className='coluna'>
                                    <div className='form-group'>
                                        <label htmlFor="cidade">Cidade</label>
                                        <Field  id="cidade" name="cidade"  />
                                        <ErrorMessage name="cidade" />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="uf">Uf</label>
                                        <Field  id="uf" name="uf"  />
                                        <ErrorMessage name="uf" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <input className='button' type="submit"  value="Enviar" />
                    </Form>
                )}
            />
        </div>
    )
}

export default FormRegister;