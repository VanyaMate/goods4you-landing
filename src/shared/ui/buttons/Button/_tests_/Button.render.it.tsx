import ComponentRenderIt from '$/_tests_/components/Component.render.it.tsx';
import Button, { ButtonProps } from '@/shared/ui/buttons/Button/Button.tsx';


export const ButtonRenderIt = ComponentRenderIt<ButtonProps>(Button, {
    children: 'edit',
}, {
    text: 'edit',
    role: 'button',
});