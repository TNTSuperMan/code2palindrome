export default (source: string): string => {
    const molded = source.replaceAll('\r','') //CRLFの無効化
        .split('\n')
        .map(e=>
            e.endsWith('//') ? //エスケープ済みの場合の処理
                e :
                e.endsWith('*') ? //*で終わってた場合の処理
                    e+' //' :
                    e+'//')
        .join('\n');
    return molded + molded.split('').reverse().join(''); //回文にする
};
