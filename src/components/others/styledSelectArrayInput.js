import styled from 'styled-components';
import { SelectArrayInput } from 'react-admin';

export const StyledSelectArrayInput = styled(SelectArrayInput)`{
  .MuiChip-root {
		max-width: 240px;
	}
	.MuiFilledInput-root:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
}`