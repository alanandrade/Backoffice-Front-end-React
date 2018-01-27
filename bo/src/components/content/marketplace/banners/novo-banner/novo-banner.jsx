import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';
import { Row, Input } from 'react-materialize';

import './novo-banner.css';

//Componentes
import { TitlesBox, TitlePrimario } from '../../../../utilities/titles/titles';
import { BtnDefault, BtnSecondary, BtnClean } from '../../../../utilities/buttons/buttons';
import { ActionHeaderBox, ActionHeader } from '../../../../utilities/actionHeader/actionHeader';

export default class NovoBanner extends Component {
    componentDidMount () {
        document.querySelector(".picker__weekday").title="teste";
    }

    render() {
        return (
            <div className="novoBanner">
                <ActionHeaderBox>
                    <TitlesBox>
                        <TitlePrimario>Cadastrar Novo Banner</TitlePrimario>
                    </TitlesBox>
                    <ActionHeader>
                        <Link to="/Banners">
                            <BtnSecondary><Icon name="reply" /> Voltar</BtnSecondary>
                        </Link>

                        <div className="clearfix"></div>
                    </ActionHeader>
                </ActionHeaderBox>

                <div className="clearfix"></div>

                <div className="content">
                    <form>
                        <Row>
                            <Input s={12} m={6} label="ID do Banner" />
                            <Input s={12} m={6} type='select' label="Selecione um Canal" defaultValue='Todos'>
                                <option value='Todos'>Todos</option>
                                <option value='B2C'>B2C</option>
                                <option value='B2B Enterplay'>B2B Enterplay</option>
                                <option value='B2C Flavia Pavanelli'>B2C Flavia Pavanelli</option>
                                <option value='B2B B2C CufaCard'>B2B B2C CufaCard</option>
                            </Input>
                            <Input s={12} m={6} label="URL de destino do Banner" />
                            <Input s={12} m={6} label="ALT text (texto informativo do banner)" />
                            
                            <Input s={12} m={6} type='date' className="datepicker" onChange={function (e, value) { }} label="Data de inicio para exibição do banner" />
                            <Input s={12} m={6} type='date' onChange={function (e, value) { }} label="Data final para exibição do banner" />
                            <Input s={12} m={6} type='select' label="Ação ao clicar" defaultValue=''>
                                <option value=''>Abrir na página</option>
                                <option value='new_blank'>Abrir uma nova página</option>
                            </Input>

                            <Input s={12} m={6} type="file" label="Upload da imagem"></Input>
                            <Input s={12} type='checkbox' label='Este banner está ativo?' defaultChecked='checked' />
                        </Row>

                        <BtnDefault>Salvar Banner</BtnDefault>
                        <BtnClean>Limpar</BtnClean>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        );
    }
}