export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Laptop Dell',
    preco: 3500.00,
    descricao: 'Laptop profissional com processador Intel i7, 16GB de RAM, SSD de 512GB, tela Full HD de 15.6"',
    emEstoque: true
  },
  {
    id: 2,
    nome: 'Mouse Logitech',
    preco: 150.00,
    descricao: 'Mouse sem fio de alta precisão com bateria de longa duração (2 anos). Conectividade 2.4GHz.',
    emEstoque: true
  },
  {
    id: 3,
    nome: 'Teclado Mecânico',
    preco: 450.00,
    descricao: 'Teclado RGB com switches mecânicos Cherry MX, suporte para perfil, programável.',
    emEstoque: false
  },
  {
    id: 4,
    nome: 'Monitor 27"',
    preco: 1200.00,
    descricao: 'Monitor 4K com suporte HDR, painel IPS, tempo de resposta de 5ms, 144Hz',
    emEstoque: true
  },
  {
    id: 5,
    nome: 'Webcam HD',
    preco: 280.00,
    descricao: 'Webcam 1080p para videoconferências com microfone integrado e foco automático',
    emEstoque: false
  },
  {
    id: 6,
    nome: 'Headset Gamer',
    preco: 350.00,
    descricao: 'Headset com som surround 7.1, cancelamento de ruído, microfone retrátil',
    emEstoque: true
  }
];
