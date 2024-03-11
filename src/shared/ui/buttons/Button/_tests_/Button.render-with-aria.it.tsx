import ComponentRenderWithAriaIt
    from '$/_tests_/components/Component.render-with-aria.it.tsx';
import Button, { ButtonProps } from '@/shared/ui/buttons/Button/Button.tsx';


export const ButtonRenderWithAriaIt = ComponentRenderWithAriaIt<ButtonProps>(Button, {
    children    : 'loading',
    'aria-label': 'Fetch products',
}, {
    role     : 'button',
    ariaLabel: 'Fetch products',
});