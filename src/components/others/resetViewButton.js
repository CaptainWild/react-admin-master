import React from 'react';
import {
    Button,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';
import { VisibilityOff } from '@material-ui/icons';

const ResetViewsButton = ({ selectedIds, component }) => {
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const [updateMany, { loading }] = useUpdateMany(
        'posts',
        selectedIds,
        { views: 0 },
        {
            onSuccess: () => {
                refresh();
                notify(`${component} updated`);
                unselectAll(`${component}`);
            },
            onFailure: error => notify('Error: posts not updated', 'warning'),
        }
    );

    return (
        <Button
            label='RESET VIEWS'
            disabled={loading}
            onClick={updateMany}
        >
            <VisibilityOff />
        </Button>
    );
};

export default ResetViewsButton;