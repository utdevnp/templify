import { BlockManager, BasicType } from 'easy-email-core';
import { EmailEditor, EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProps, StandardLayout } from 'easy-email-extensions';

import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import '@arco-themes/react-easy-email-theme/css/arco.css';
import { defaultMenus } from './core/defaultMenu';

const initialValues = {
  subject: 'Welcome to Easy-email',
  subTitle: 'Nice to meet you!',
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};
const defaultCategories: ExtensionProps['categories'] = defaultMenus as ExtensionProps['categories'];


const Builder = () =>  {

  return (
    <EmailEditorProvider
      data={initialValues}
      height={'calc(100vh - 72px)'}
      autoComplete
      dashed={true}
      enabledLogic={true}
      interactiveStyle={true}
    >
      {({ values }) => {
        return (
          <StandardLayout
            showSourceCode={true}
            categories={defaultCategories}
          >
            <EmailEditor />
          </StandardLayout>
        );
      }}
    </EmailEditorProvider>
  );
}
export default Builder;

