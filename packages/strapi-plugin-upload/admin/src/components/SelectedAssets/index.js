import React from 'react';

import { getTrad } from '../../utils';

import Flex from '../Flex';
import IntlText from '../IntlText';
import ListTitle from '../UploadList/ListTitle';
import useModalContext from '../../hooks/useModalContext';
import List from '../List';

const SelectedAssets = () => {
  const { selectedFiles, handleFileSelection } = useModalContext();
  const filesToUploadLength = selectedFiles.length;
  const titleId = `modal.upload-list.sub-header-title.${
    filesToUploadLength > 1 ? 'plural' : 'singular'
  }`;

  return (
    <div style={{ width: '100%' }}>
      <Flex justifyContent="space-between">
        <div>
          <ListTitle id={getTrad(titleId)} values={{ number: filesToUploadLength }} />
          <IntlText
            id={getTrad('modal.upload-list.sub-header-subtitle')}
            values={{ number: filesToUploadLength }}
            fontSize="sm"
            color="grey"
          />
        </div>
      </Flex>
      <List data={selectedFiles} onChange={handleFileSelection} selectedItems={selectedFiles} />
    </div>
  );
};

export default SelectedAssets;
