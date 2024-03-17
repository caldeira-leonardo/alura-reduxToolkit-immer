import Header from "components/Header";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Anuncie.module.scss";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { cadastrarItem } from "store/reducers/itens";
import { useParams } from "react-router-dom";
import Input from "components/Input";

const Anuncie = ({}) => {
  const dispatch = useDispatch();
  const { nomeCategoria = "" } = useParams();
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
    },
  });

  const cadastrar = (data) => {
    dispatch(cadastrarItem(data));
  };

  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui !"
        descricao="Anuncie seu produto no melhor site do Brasil"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <Input
          {...register("titulo", { required: true })}
          placeholder="Nome do produto"
          alt="nome do produto"
        />
        <Input
          {...register("descricao", { required: true })}
          placeholder="Descrição do produto"
          alt="descrição do produto"
        />
        <Input
          {...register("foto", { required: true })}
          placeholder="URL da umagem do produto"
          alt="url da umagem do produto"
        />
        <select
          {...register("categoria", { required: true })}
          disabled={nomeCategoria}
        >
          <option value="" disabled>
            Selecione a categoria
          </option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <Input
          {...register("preco", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="Preço do produto"
          alt="preço do produto"
        />
        <Button type="submit"> Cadastrar produto</Button>
      </form>
    </div>
  );
};

export default Anuncie;
