/* eslint-disable prettier/prettier */
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useFetchAPI } from '../../hooks/useFetchAPI';
import { theme } from '../../styles/theme';
import { createCategorySchema } from '../../validators/schemas';
import { CreateCategoryData } from '../../validators/types';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import { Container } from './styles';

export function CreateCategoryDialog() {
  const { createCategory, fetchCategories } = useFetchAPI();
  const [open, setOpen] = useState(false);
  useForm<CreateCategoryData>({
    defaultValues: {
      title: '',
      color: theme.colors.primary,
    },
    resolver: zodResolver(createCategorySchema),
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data: CreateCategoryData) => {
      await createCategory(data);
      handleClose();
      await fetchCategories();
    },
    [handleClose, createCategory, fetchCategories],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova categoria</Button>}
    >
      <Container>
        <Title
          title="Nova Categoria"
          subtitle="Crie uma categoria para suas transaçães"
        />

        <form>
          <div>
            <Input label="Nome" placeholder="Nome da categoria..." />
            <Input label="Color" type="color" />
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancelar
            </Button>
            <Button onClick={onSubmit} type="button">
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
