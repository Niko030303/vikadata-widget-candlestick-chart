import React from 'react';
import {useActiveCell, useRecord} from '@vikadata/widget-sdk';

export const KLinePreview: React.FC = () => {
    const activeCell = useActiveCell();
    const activeRecord = useRecord(activeCell?.recordId)
    const sto = activeRecord?.getCellValueString('fldFtjhc7O2qS')

    // 获取分时k线图
    const minLineUrl = `http://image.sinajs.cn/newchart/min/n/${sto}.gif`

    // 获取日k线图
    const dailyLineUrl = `http://image.sinajs.cn/newchart/daily/n/${sto}.gif`

    // 获取周k线图
    const weeklyLineUrl = `http://image.sinajs.cn/newchart/weekly/n/${sto}.gif`

    return (
        <div>
            <h2>股票实时预览</h2>
            <hr  />
            <h3>分时线</h3>
            <img src={minLineUrl} width="100%" height="100%" alt="点击想要查看k线图的对应股票代码单元格"  ></img><hr  />
            <h3>日线</h3>
            <img src={dailyLineUrl} width="100%" height="100%" alt="点击想要查看k线图的对应股票代码单元格"  ></img><hr  />
            <h3>周线</h3>
            <img src={weeklyLineUrl} width="100%" height="100%" alt="点击想要查看k线图的对应股票代码单元格"  ></img>
        </div>
    )
}