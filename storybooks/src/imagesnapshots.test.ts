import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = ({ context: { fileName } }: any) => {
    const snapshotPath = path.join('src', path.dirname(fileName), 'imagesnapshots');
    return { customSnapshotsDir: snapshotPath };
};

initStoryshots({
    test: imageSnapshot({
        getMatchOptions,
    }),
});
