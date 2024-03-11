import ComponentRenderIt from '$/_tests_/components/Component.render.it.tsx';
import IconM, { IconMProps } from '@/shared/ui/icons/IconM/IconM.tsx';


export const IconMRenderIt = ComponentRenderIt<IconMProps>(IconM, { children: 'edit' }, { text: 'edit' });