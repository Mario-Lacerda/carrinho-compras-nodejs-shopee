# Desafio Dio - Carrinho de Compras da Shopee usando Node.js



**Projeto de Carrinho de Compras da Shopee com Node.js**

**Descrição:**

Este projeto é um simulador de carrinho de compras para a loja virtual da Shopee, desenvolvido em Node.js. Ele apresenta uma estrutura modular para criar, adicionar e remover itens do carrinho, calcular o valor total da compra e aplicar descontos.



#### **Códigos:**

javascript



```javascript
// Criar um novo carrinho de compras
const carrinho = new Carrinho();

// Adicionar um item ao carrinho
carrinho.adicionarItem({
  id: 1,
  nome: "Camiseta",
  preco: 20.00,
  quantidade: 2
});

// Remover um item do carrinho
carrinho.removerItem(1);

// Calcular o valor total da compra
const valorTotal = carrinho.calcularValorTotal();

// Aplicar um desconto de 10%
carrinho.aplicarDesconto(0.1);

// Exibir o conteúdo do carrinho
console.log(carrinho.itens);
```



### **Recursos:**

- Estrutura modular para fácil manutenção e expansão
- Suporte para adicionar, remover e atualizar itens do carrinho
- Cálculo automático do valor total da compra
- Aplicação de descontos
- Exibição do conteúdo do carrinho em formato JSON



### **Observação:**

Este é apenas um exemplo de código para um carrinho de compras da Shopee. O código real pode variar dependendo dos requisitos específicos do projeto.





- #### **Padrões de projeto**

  

  - Os padrões de projeto são soluções reutilizáveis para problemas comuns de design de software. Eles fornecem uma maneira de projetar e implementar sistemas de software de forma mais eficiente e confiável.
  - Existem muitos tipos diferentes de padrões de projeto, incluindo padrões de criação, estruturais e comportamentais.
  - Aqui está um exemplo de código de um padrão de projeto de fábrica:

  java

  

  ```java
  public class Factory {
  
    public static Product createProduct(String type) {
      switch (type) {
        case "A":
          return new ProductA();
        case "B":
          return new ProductB();
        default:
          throw new IllegalArgumentException("Tipo de produto inválido: " + type);
      }
    }
  }
  ```

  

- **Boas práticas de programação**

  

  - As boas práticas de programação são diretrizes que ajudam os desenvolvedores a escrever código limpo, eficiente e fácil de manter.

    

  - Algumas boas práticas de programação comuns incluem:

    - Usar nomes de variáveis significativos
    - Indentar o código corretamente
    - Escrever comentários para explicar o código
    - Testar o código regularmente

    

  - Aqui está um exemplo de código que segue as boas práticas de programação:

  java

  

  ```java
  public class MyClass {
  
    private int myField;
  
    public MyClass(int myField) {
      this.myField = myField;
    }
  
    public int getMyField() {
      return myField;
    }
  
    public void setMyField(int myField) {
      this.myField = myField;
    }
  }
  ```

  

- #### **Projetos de código aberto**

  

  - Os projetos de código aberto são projetos de software que são disponibilizados gratuitamente para uso e modificação.

    

  - Existem muitos projetos de código aberto populares, incluindo o Linux, o Apache HTTP Server e o WordPress.

    

  - Aqui está um exemplo de código de um projeto de código aberto:

  java

  

  ```java
  public class Main {
  
    public static void main(String[] args) {
      System.out.println("Hello, world!");
    }
  }
  ```







# Carrinho de compras - Desafio

![image](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/assets/85120918/89a6e095-f745-48b4-b118-b5f23bcf9c56)


[![React Native](https://img.shields.io/badge/React%20Native-0.66.3-blue)](https://reactnative.dev/)
[![Context API](https://img.shields.io/badge/Context%20API-17.0.2-green)](https://pt-br.reactjs.org/docs/context.html)

Este é um aplicativo para listar produtos e adicionar no carrinho de compras, desenvolvido em React Native. Ele foi criado como um desafio para avaliar o meu potencial como desenvolvedor.

## Introdução

O aplicativo consiste em tres telas: uma que mostra a lista de produtos disponíveis, uma que mostra o produto com mais detalhes e outra que mostra o carrinho de compra com os produtos selecionados. O usuário pode navegar entre as telas, adicionar ou remover produtos do carrinho, e ver o valor e quantidade total da compra.

O aplicativo usa a Context API para gerenciar o estado global dos produtos e do carrinho, permitindo o acesso e a atualização dessas informações em qualquer componente. Os dados dos produtos são armazenados em um array, mas podem ser facilmente substituídos por uma fonte externa, como uma API.

O layout do aplicativo foi inspirado no mockup em anexo, buscando fidelidade e responsividade.



## Instalação



Para instalar e executar o aplicativo, você precisa ter o [Node.js](https://nodejs.org/en/) e o [Expo](https://expo.dev/) instalados na sua máquina. Em seguida, siga os passos abaixo:

1. Clone o repositório do GitHub:

```bash
git clone https://github.com/Davi-Lv/Carrinho-de-compras-desafio.git
```

2. Entre na pasta do projeto:

```bash
cd Carrinho-de-compras-desafio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o Expo:

```bash
expo start
```

5. Abra o aplicativo no seu dispositivo ou web, usando o QR code ou o link fornecidos pelo Expo.



## Uso



Para usar o aplicativo, basta seguir os passos abaixo:

- Na tela inicial, você verá a lista de produtos disponíveis, com o nome, a imagem e preço de cada um.
- Para adicionar um produto ao carrinho, clique no produto para ver mais detalhes e toque no botão "+" logo a baixo do produto, logo apois clicar em "adicionar ao carrinho" Você verá o número de itens no carrinho aumentar no canto superior direito da tela.
- Para remover um produto do carrinho, toque no botão "-" ao lado do produto. Você verá o número de itens no carrinho diminuir no canto superior direito da tela.
- Para ver o carrinho de compra, toque no ícone do carrinho no canto superior direito da tela. Você será levado para a tela do carrinho, onde você verá os produtos que você adicionou, com o nome, a imagem, o preço e o subtotal de cada um.
- Para remover um produto do carrinho, deslize o produto para a esquerda e toque no botão "Remover". Você verá o produto desaparecer da lista e o total da compra se atualizar.
- Para voltar para a tela inicial, toque no botão "Voltar" no canto superior esquerdo da tela. Você será levado para a tela de produtos, onde você poderá continuar adicionando ou removendo produtos do carrinho.



## Documentação



Para mais detalhes sobre o projeto, consulte os seguintes arquivos e páginas:

- [App.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/App.js): o arquivo principal do aplicativo, que contém a navegação entre as telas e o provedor do contexto global.
- [src/context/ProductsContext.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/context/ProductsContext.js): o arquivo que define o contexto global dos produtos e do carrinho, com as funções para adicionar, remover e atualizar os itens.
- [src/screens/ProductsScreen.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/screens/ProductsScreen.js): o arquivo que define a tela de produtos, com a lista de produtos.
- [src/screens/ProductDetails.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/screens/ProductDetails.js): o arquivo que contem mais detalhes do produto selecionado com os botões para adicionar ou remover do carrinho.
- [src/screens/CartScreen.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/screens/CartScreen.js): o arquivo que define a tela do carrinho, com a lista de produtos no carrinho e o valor total da compra.
- [src/components/ProductItem.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/components/ProductItem.js): o arquivo que define o componente de um produto, com o nome, a imagem= e preço.
- [src/components/CartItem.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/components/CartItem.js): o arquivo que define o componente de um item no carrinho, com o nome, a imagem, o preço, a quantidade e o subtotal.
- [src/data/products.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/data/products.js): o arquivo que contém o array com os dados dos produtos, como o id, o nome, a imagem e preço.
- [src/styles/styles.js](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/blob/main/src/styles/styles.js): o arquivo que contém os estilos globais do aplicativo, como as cores, as fontes e as dimensões.



## imagens das telas (desafio finalizado):

![image1](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/assets/85120918/8470b73c-3f1e-451c-92f1-0ed3cdeabf5e)
![image2](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/assets/85120918/0f65b6c8-f961-4c12-a369-5802bae5f0b5)
![image3](https://github.com/Davi-Lv/Carrinho-de-compras-desafio/assets/85120918/a5e45351-1dc5-4404-b5e8-882468075c02)





### Agradecimento e Apoio ao Autor Projeto:

https://github.com/Davi-Lv
