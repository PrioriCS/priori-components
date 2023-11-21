import { isFunction, noop } from 'lodash';
import { toast } from 'react-toastify';

const messages = {
  success: {
    userGroupCreated: 'Grupo criado com sucesso!',
    userGroupEdited: 'Grupo editado com sucesso!',
    userGroupDeleted: 'Grupo excluído com sucesso!',
    userRegistered: 'Usuário cadastrado com sucesso!',
    userDeleted: 'Usuário excluído com sucesso!',
    userEdited: 'Usuário editado com sucesso!',
    salesmanDefined: 'Vendedores definidos com sucesso!',
    quotesNotes: 'Anotações enviadas com sucesso!',
    quoteProduced: 'Orçamento marcado como produzido!',
    quoteAproved: 'Orçamento aprovado com sucesso!',
    quoteReproved: 'Orçamento marcado como reprovado!',
    quoteAuthorized: 'Orçamento autorizado!',
    quotePending: 'Orçamento marcado como em negociação!',
    quoteInvalid: 'Orçamento marcado como vencido!',
    quoteSigned: 'Orçamento marcado como assinado!',
    notificationsDefined: 'Notificações definidas com sucesso!',
    installationStarted: 'Instalação inicializada com sucesso!',
    installationFinished: 'Instalação finalizada!',
    installationScheduled: 'Instalação agendada com sucesso!',
    installationEdited: 'Instalação editada com sucesso!',
    installAddressUpdated: 'Endereço de instalação alterado com sucesso!',
    conclusionTimeSelected: 'Prazo de instalação definido com sucesso!',
    jobConclusionTime: 'Prazo da obra definido com sucesso!',
    undoSchedule: 'O agendamento foi desfeito!',
    undoStartedInstallation: 'A instalação foi interrompida!',
    installationStep: 'Passo de instalação concluído com sucesso!',
    workClosingStep: 'Passo de fechamento concluído com sucesso!',
    workFinishStep: 'Passo de acabamento concluído com sucesso!',
    reportStep: 'Anotação salva com sucesso!',
    contractSent: 'Contrato enviado com sucesso!',
    quotesReprovedFeedback: 'Lista de motivos para não fechamento de orçamento atualizada!',
    leadsCaptureList: 'Lista de captura de leads atualizada!',
    installationStepAll: 'Passos de instalação concluídos com sucesso!',
    workClosingStepAll: 'Passos de fechamento concluídos com sucesso!',
    workFinishStepAll: 'Passos de acabamento concluídos com sucesso!',
    leadsUpdated: 'Captação de leads atualizada com sucesso!',
    disapprovalUpdated: 'Motivo de não fechamento atualizado com sucesso!',
    clientUpdated: 'Informações do cliente atualizado com sucesso!',
    installationsSync: 'Sincronização das instalações concluída com sucesso!',
    reviewDate: 'Data de revisitação do orçamento definida com sucesso!',
    profileEdited: 'Perfil editado com sucesso!',
    passswordChanged: 'Senha alterada com sucesso!',
    notificationRead: 'Notificação marcada como lida!',
    allNotificationsRead: 'Todas as notificações foram marcadas como lidas!',
    preSaleLinkCreated: 'Link para atendimento gerado com sucesso!',
    preSaleMissingDataLinkCreated: 'Link para atualização de dados gerado com sucesso!',
    linkCopy: 'Link copiado!',
    preSaleCreated: 'Atendimento gerado com sucesso!',
    PreSaleInit: 'Atendimento inicializado com sucesso!',
    firstPassClientData: 'Dados do cliente atualizados com sucesso!',
    firstPassScheduleData: 'Dados do atendimento enviados com sucesso!',
    PreSaleRegister: 'Etapa de cadastro concluída com sucesso!',
    PreSaleQuote: 'Etapa de orçamento concluída com sucesso!',
    secondPassQuoteNotes: 'Anotaçõs do orçamento enviadas com sucesso!',
    secondPassRequestQuote: 'Orçamento solicitado com sucesso!',
    secondPassQuoteId: 'ID do orçamento adicionado com sucesso!',
    secondPassFileSent: 'Arquivo enviado com sucesso!',
    thirdPassFileSent: 'Arquivo enviado com sucesso!',
    PreSaleTechniqueVisit: 'Etapa de visita técnica concluída com sucesso!',
    preSaleChecklistSent: 'Checklist atualizada com sucesso!',
    thirdPassQuoteChanges: 'Anotações de alteração do orçamento enviadas com sucesso!',
    PreSalePaymentForm: 'Forma de pagamento atualizada com sucesso!',
    PreSalePaymentMethod: 'Método de pagamento atualizado com sucesso!',
    FinishedPreSale: 'Atendimento concluído com sucesso!',
    FileUploaded: 'Arquivo enviado com sucesso!',
    preSaleRegisterForm: 'Solicitação de atendimento enviada com sucesso!',
    preSaleRatingForm: 'Avaliação enviada com sucesso!',
    supportMaterial: 'Material de apoio adicionado com sucesso!',
    supportMaterialDelete: 'Material de apoio deletado com sucesso!',
    quoteChangesRequested: 'Alteração de orçamento solicitada com sucesso!',
    quoteChangesConfirmed: 'Alterações do orçamento confirmadas com sucesso!',
    preSaleCanceled: 'Atendimento cancelado!',
    FileRemoved: 'Arquivo removido com sucesso!',
    salesmanActivity: 'Atividade do vendedor definida com sucesso!',
    preSaleQuoteRequestCanceled: 'Solicitação cancelada com sucesso!',
    filesUpload: 'Arquivos anexados com sucesso!',
    fileRemoved: 'Arquivo removido!',
    updatedTable: 'Tabela atualizada com Sucesso',
    clientMailSent: 'Email enviado com sucesso!',
    infoSent: 'Informações enviadas com sucesso!',
    measurementChecklist: 'Checklist atualizada com sucesso!',
    scheduledMeasurement: 'Medição agendada com sucesso!',
    general_measurement_feedback: 'Anotação geral salva com sucesso!',
    measurement_date_defined: 'Data da medição definida com sucesso!',
    measurement_items_edited: 'Dados da(s) esquadria(s) editados com sucesso!',
    measurement_measurer_defined: 'Responsável pela medição definido com sucesso!',
    advanceMeasurementPhaseOne: 'Primeira fase concluída com sucesso!',
    changeQuotesToAlternative: 'Orçamento alterado com sucesso!',
    quoteWithoutPaymentProblem: 'Orçamento marcado como sem problema no pagamento com sucesso!',
    quotePayementProblem: 'Orçamento marcado como com problema no pagamento com sucesso!',
    paymentMethodsList: 'Lista de métodos de pagamento atualizada com sucesso!',
    paymentFormsList: 'Lista de formas de pagamento atualizada com sucesso!',
    quoteDetailsUpdated: 'Informações do orçamento atualizadas com sucesso!',
    paymentOptionsConfirmed: 'Informações de pagamento do orçamento definidas com sucesso!',
    supplierCreated: 'Comprador/Fornecedor cadastrado com sucesso!',
    supplierAccountCreated: 'Conta bancária do comprador/fornecedor registrada com sucesso!',
    supplierAccountUpdated: 'Conta bancária do comprador/fornecedor atualizada com sucesso!',
    salesmanGoals: 'Metas do vendedor definidas com sucesso!',
    tableDataUpdated: 'Dados da tabela atualizados com sucesso!',
    productCreated: 'Produto cadastrado com sucesso!',
    stockUpdated: 'Estoque atualizado com sucesso!',
    productDimensionsList: 'Lista de dimensões de produtos atualizada com sucesso!',
    quoteCloseToSea: 'Informação de proximidade ao mar atualizada com sucesso!',
    uploadQuoteFile: 'Arquivo de orçamento enviado com sucesso!',
    uploadProductionFile: 'Arquivo de produção enviado com sucesso!',
    uploadMeasurementFile: 'Arquivo da medição enviado com sucesso!',
    preSaleScheduleCreated: 'Atendimento criado com sucesso!',
    measurement_date_change: 'Data da medição alterada com sucesso!',
    updateJobResponsible: 'Responsável da obra atualizado com sucesso!',
    measurementDifficulty: 'Dificuldade da obra atualizada com sucesso!',
    closeToSea: 'Informação da proximidade do mar atualizada com sucesso!',
    isEasyAccess: 'Informação de fácil acesso atualizada com sucesso!',
    itemToProduction: 'Liberação da(s) esquadria(s) realizada com sucesso!',
    uploadFrameImage: 'Imagem da esquadria enviada com sucesso!',
    DeleteFrameImage: 'Imagem da esquadria deletada com sucesso!',
  },
  failure: {
    userGroupEdited: 'Não foi possível editar o grupo!',
    userGroupCreated: 'Não foi possível criar o grupo!',
    userGroupDeleted: 'Não foi possível excluir o grupo!',
    userRegistered: 'Não foi possível cadastrar o usuário!',
    userDeleted: 'Não foi possível excluir o usuário!',
    userEdited: 'Não foi possível editar o usuário!',
    salesmanDefined: 'Não foi possível definir os vendedores!',
    quotesNotes: 'Não foi possível enviar as anotações!',
    quoteProduced: 'Não foi possível marcar o orçamento como produzido!',
    quoteAproved: 'Não foi possível aprovar o orçamento',
    quoteReproved: 'Não foi possível marcar como reprovado!',
    quoteAuthorized: 'Não foi possível autorizar o orçamento!',
    quotePending: 'Não foi possível marcar como em negociação!',
    quoteInvalid: 'Não foi possível marcar como vencido',
    quoteSigned: 'Não foi possível marcar como assinado!',
    notificationsDefined: 'Não foi possível definir as notificações!',
    installationStarted: 'Não foi possível inicializar a instalação!',
    installationFinished: 'Não foi possível finalizar a instalação!',
    installationScheduled: 'Não foi possível agendar a instalação!',
    installationEdited: 'Não foi possível editar a instalação!',
    installAddressUpdated: 'Não foi possível alterar o endereço de instalação!',
    installationWithoutInstaller: 'A instalação precisa de um responsável!',
    conclusionTimeSelected: 'Não foi possível definir o prazo de instalação!',
    jobConclusionTime: 'Não foi possível definir o prazo da obra!',
    undoSchedule: 'Não foi possível desfazer o agendamento!',
    undoStartedInstallation: 'Não foi possível interromper a instalação!',
    installationStep: 'Não foi possível concluir o passo de instalação!',
    workClosingStep: 'Não foi possível concluir o passo de fechamento!',
    workFinishStep: 'Não foi possível concluir o passo de acabamento!',
    reportStep: 'Não foi possível salvar a anotação!',
    contractSent: 'Não foi possível enviar o contrato!',
    quotesReprovedFeedback: 'Não foi possível atualizar a lista de motivos para não fechamento de orçamento!',
    leadsCaptureList: 'Não foi possível atualizar a lista de captura de leads!',
    installationStepAll: 'Não foi possível concluir os passos de instalação!',
    workClosingStepAll: 'Não foi possível concluir os passos de fechamento!',
    workFinishStepAll: 'Não foi possível concluir os passos de acabamento!',
    leadsUpdated: 'Não foi possível atualizar a captação de leads',
    disapprovalUpdated: 'Não foi possível atualizar o motivo de não fechamento',
    clientUpdated: 'Não foi possível atualizar as informações do cliente!',
    installationsSync: 'Não foi possível sincronizar os dados das instalações!',
    reviewDate: 'Não foi possível definir uma data de revisitação para o orçamento!',
    profileEdited: 'Não foi possível editar seu perfil!',
    passswordChanged: 'Não foi possível alterar sua senha!',
    notificationRead: 'Não foi possível marcar a notificação como lida!',
    allNotificationsRead: 'Não foi possível marcar todas as notificações como lidas!',
    preSaleLinkCreated: 'Não foi possível gerar o link para atendimento!',
    preSaleMissingDataLinkCreated: 'Não foi possível gerar o link para atualização de dados!',
    preSaleCreated: 'Não foi possível gerar o atendimento!',
    PreSaleInit: 'Não foi possível inicializar o atendimento!',
    firstPassClientData: 'Não foi possível atualizar os dados do cliente!',
    firstPassScheduleData: 'Não foi possível enviar os dados do atendimento!',
    PreSaleRegister: 'Não foi possível concluir a etapa de cadastro!',
    PreSaleQuote: 'Não foi possível concluir a etapa de orçamento!',
    secondPassQuoteNotes: 'Não foi possível enviar as anotações do orçamento!',
    secondPassRequestQuote: 'Não foi possível solicitar o orçamento!',
    secondPassQuoteId: 'Não foi possível adicionar o ID do orçamento!',
    PreSaleTechniqueVisit: 'Não foi possível concluir a etapa de visita técnica!',
    preSaleChecklistSent: 'Não foi possível atualizar a checklist!',
    thirdPassQuoteChanges: 'Não foi possível enviar as anotações de alteração do orçamento!',
    PreSalePaymentForm: 'Não foi possível atualizar a forma de pagamento!',
    PreSalePaymentMethod: 'Não foi possível atualizar o método de pagamento!',
    FinishedPreSale: 'Não foi possível concluir o atendimento!',
    preSaleRegisterForm: 'Não foi possível enviar a solicitação de atendimento!',
    preSaleRatingForm: 'Não foi possível enviar a avaliação!',
    supportMaterial: 'Não foi possível adicionar o material de apoio!',
    secondPassFileSent: 'Não foi possível enviar o arquivo!',
    thirdPassFileSent: 'Não foi possível enviar o arquivo!',
    quoteChangesRequested: 'Não foi possível solicitar alteração de orçamento!',
    quoteChangesConfirmed: 'Não foi possível confirmar as alterações do orçamento!',
    preSaleCanceled: 'Não foi possível cancelar o atendimento!',
    preSaleQuoteRequestCanceled: 'Não foi possível cancelar a solicitação!',
    supportMaterialDelete: 'Não foi possível deletar o material de apoio!',
    FileUploaded: 'Não foi possível enviar seu arquivo!',
    FileRemoved: 'Não foi possível remover seu arquivo!',
    salesmanActivity: 'Não foi possível definir a atividade do vendedor!',
    filesUpload: 'Não foi possível anexar os arquivos!',
    fileRemoved: 'Não foi possível remover o arquivo!',
    updatedTable: 'Não foi possível atualizar a tabela',
    clientMailSent: 'Não foi possível enviar o email!',
    infoSent: 'não foi possível enviar as informações!',
    measurementChecklist: 'Não foi possível atualizar a checklist!',
    scheduledMeasurement: 'Não foi possível agendar a medição!',
    general_measurement_feedback: 'Não foi possível salvar a anotação geral!',
    measurement_date_defined: 'Não foi possível definir a data de medição!',
    measurement_items_edited: 'Não foi possível editar os dados da(s) esquadria(s)!',
    measurement_measurer_defined: 'Não foi possível definir o responsável pela medição!',
    advanceMeasurementPhaseOne: 'Não foi possível concluir a primeira fase!',
    changeQuotesToAlternative: 'Não foi possível alterar o orçamento!',
    quoteWithoutPaymentProblem: 'Não foi possível marcar o orçamento como sem problema no pagamento!',
    quotePayementProblem: 'Não foi possível marcar o orçamento como com problema no pagamento!',
    paymentMethodsList: 'Não foi possível atualizar a lista de métodos de pagamento!',
    paymentFormsList: 'Não foi possível atualizar a lista de formas de pagamento!',
    quoteDetailsUpdated: 'Não foi possível atualizar as informações do orçamento!',
    paymentOptionsConfirmed: 'Não foi possível definir as informações de pagamento do orçamento!',
    supplierCreated: 'Não foi possível cadastrar o Comprador/Fornecedor!',
    supplierAccountCreated: 'Não foi possível registrar a conta bancária do Comprador/Fornecedor!',
    supplierAccountUpdated: 'Não foi possível atualizar a conta bancária do Comprador/Fornecedor!',
    salesmanGoals: 'Não foi possível definir as metas do vendedor!',
    tableDataUpdated: 'Não foi possível atualizar os dados da tabela!',
    productCreated: 'Não foi possível cadastrar o produto!',
    stockUpdated: 'Não foi possível atualizar o estoque!',
    productDimensionsList: 'Não foi possível atualizar a lista de dimensões dos produtos!',
    quoteCloseToSea: 'Não foi possível atualizar a informação de próximidade ao mar!',
    uploadQuoteFile: 'Não foi possível enviar o arquivo de orçamento!',
    uploadProductionFile: 'Não foi possível enviar o arquivo de produção!',
    uploadMeasurementFile: 'Não foi possível enviar o arquivo da medição!',
    preSaleScheduleCreated: 'Não foi possível criar o atendimento!',
    measurement_date_change: 'Não foi possível alterar a data da medição!',
    updateJobResponsible: 'Não foi possível atualizar o responsável da obra!',
    measurementDifficulty: 'Não foi possível atualizar a dificuldade da obra!',
    closeToSea: 'Não foi possível atualizar a informação de proximidade do mar!',
    isEasyAccess: 'Não foi possível atualizar a informação de fácil acesso!',
    itemToProduction: 'Não foi possível concluir a liberação da(s) esquadria(s) para produção!',
    uploadFrameImage: 'Não foi possível enviar a imagem da esquadria!',
    DeleteFrameImage: 'Não foi possível deletar a imagem da esquadria!',
  },
};

export function notifyError(message) {
  toast.error(message);
}

export function notifySuccess(message) {
  toast.success(message);
}

const successFunctions = {};

Object.keys(messages.success).forEach((key) => {
  successFunctions[key] = (...args) => {
    const value = messages.success[key];
    const message = isFunction(value) ? value(...args) : value;

    notifySuccess(message);
  };
});

const failureFunctions = {};

Object.keys(messages.failure).forEach((key) => {
  failureFunctions[key] = (...args) => {
    const value = messages.failure[key];
    const message = isFunction(value) ? value(...args) : value;

    notifyError(message);
  };
});

const notifications = {
  success: successFunctions,
  failure: failureFunctions,
};

export function notify(status, message, ...messageArgs) {
  notifications[status][message](...messageArgs);
}

export function decorate(post, message) {
  return (route, options = {}) => {
    return post(route, decorateOptions(message, options));
  };
}

export function decorateOptions(message, options = {}) {
  const { onSuccess = noop, onError = noop, ...otherOptions } = options;

  return {
    ...otherOptions,
    onSuccess: () => {
      onSuccess();
      notify('success', message);
    },
    onError: () => {
      onError();
      notify('failure', message);
    },
  };
}

export default notifications;
