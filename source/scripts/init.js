import settings from './context/settings';
import translate from './common/translate';
import basicLangs from './basic.langs';

settings.init();
translate.addBlock(basicLangs);
