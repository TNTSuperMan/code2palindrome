export default (source: string): string => {
    const t = source.replaceAll('\r','') //CRLFの無効化
        .split('\n')
        .map(e=>
            e.endsWith('//') ? //エスケープ済みの場合の処理
                e :
                e.endsWith('*') ? //*で終わってた場合の処理
                    e+' //' :
                    e+'//')
        .join('\n');
    return t + t.split('').reverse().join(''); //回文にする
};
