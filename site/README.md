# Funcionamento do diretório Site

Esse site foi criado utilizando-se [Docusaurus 2](https://docusaurus.io/), um gerador de sites estáticos.
Este diretório é responsável  pelas configurações do site que permitem a geração automatizada da documentação e dos posts no Blog. Recomendo fortemente que, antes de tentar alterá-lo, leia a documentação oficial do Docusaurus.

## Funcionamento

Nesse diretório temos alguns arquivos importantes para o funcionamento da Knowledge Base:

- docusaurus.config: É utilizado para a configuração do site. Nele temos o título do site, os links externos, a escolha do tema, a criação da hierarquia do site e muito mais. É o principal arquivo utilizado para modificar o funcionamento do site. Mais informações estão disponíveis na documentação da Docusaurus citada acima.
- sidebars.js: É responsável por gerar automaticamente a barra de navegação na lateral esquerda da documentação.
- Diretório static: Utilizado para armazenar imagens, logos, favicons etc. Os arquivos armazenados nessa pasta são utilizados pelo Docusaurus para gerar alguns elementos do site, como a logo da Skyrats que vemos no canto superior esquerdo.

Os arquivos e diretórios citados acima são os mais importantes para a configuração do site. Os demais fazem parte do código fonte ou servem para incluir funcionalidades ao site.

Novamente, recomendo fortemente que esse diretório não seja alterado sem a leitura prévia da documentação do gerador [Docusaurus 2](https://docusaurus.io/).