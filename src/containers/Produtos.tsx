// 1 -TYPE PRODUTO É IMPORTADO E RECEBE NOME DE PRODUTOTYPE
import { Produto as ProdutoType } from '../App'

import Produto from '../components/Produto'

import * as S from './styles'

//2-PRODUTOS E FAVORITOS RECEBEM COMO TIPO O PRODUTO TYPE - INCLUI A FUNÇÃO FAVORITAR COMO PROPRIEDADE
type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}

            //caminho do favoritar  - produto index > produtos> app
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
