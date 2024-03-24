import React, { useCallback, useRef } from 'react';
import Details, { DetailsItem } from '@/shared/ui/details/Details/Details.tsx';


export type DetailsListProps = {
    details: DetailsItem[];
};

const DetailsList: React.FC<DetailsListProps> = (props) => {
    const { details }        = props;
    // Функция для закрытия открытого details
    const closeOpenedDetails = useRef<(() => void) | null>(null);
    const onOpenHandler      = useCallback((callback: () => void) => {
        closeOpenedDetails.current?.();
        closeOpenedDetails.current = callback;
    }, []);
    const onCloseHandler     = useCallback(() => {
        closeOpenedDetails.current = null;
    }, []);

    return (
        <div>
            {
                details.map((item, index) =>
                    <Details
                        { ...item }
                        key={ index }
                        onCloseInList={ onCloseHandler }
                        onOpenInList={ onOpenHandler }
                    />,
                )
            }
        </div>
    );
};

export default React.memo(DetailsList);