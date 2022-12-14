# 实战经验总结

## 编程结构理解

- &nbsp;<t b c2>if</t> 条件结构
  - &nbsp;<t b c2>boolean</t> 条件值（要掌握逻辑运算）
  - 一定要<t c5>考虑边界值</t>（左边界，中间正常值，右边界）
  - 适当使用逆向思维<t c5>（取反）</t>
- &nbsp;<t b c2>for</t> 循环结构
  - &nbsp;<t c5>完整循环</t>需要完成的任务
    - 完整循环开始时 <t c5>输入</t>
    - 完整循环结束时的 <t c5>输出</t>
    - &nbsp;<t b c2>break</t> 是否可以迅速终此完整循环？
  - 循环<t b c2>开始条件</t>
  - 循环<t b c2>结束条件</t>
  - &nbsp;<t c5>循环一次</t>需要完成的任务
    - 本次循环开始时的 <t c5>输入</t>
    - 本次循环结束时的 <t c5>输出</t>
    - &nbsp;<t b c2>continue</t> 是否可以迅速终此单次循环？

## 如何去找题？

- 找题尽量<t c2>按照分类找</t>，一个系列的题，一起同时刷，这样可以互补，加强肌肉记忆。
- 由<t c2>简单到难</t>的顺序。太难了容易放弃，太简单容易自大。

## 怎么面对一道新题目？

- 看清楚题目条件，理解题目。如果题目都不懂，不要执行后续步骤
- 按最原始最简单的想法解题
  - 不要一开始
- 一定要有思路与步骤（无论是自己的还是他人的）
  - 完全没有思路的时候
    - 切记不要写代码
    - 直接看官方的解题思路
    - 记录下，分析下为什么理解不了题。
  - 不到50%的思路
    - 要记录不清晰的点
    - 看官方解题思路
    - 记录下，那些地方思路不清晰
  - 有60%-80%思路
    - 看官方解题思路
    - 记录下，那些地方思路不清晰
  - 有100%思路
    - 开始写代码
    - 记住出错的点

## 一道题里比较重要的是什么？

- 答案不是唯一重要的，毕竟天下基本上不会有一模一样的题目。
- 形成编程思维才是最重要的。有了编程思维，才能够面对实际的工作业务需求才是游刃有余的。
- 要搞清楚解题结构,把题目内的精髓记录下来，并且背住，由量变到质变，最后得到固化与升华。
  - 考点、难度分析
  - 解题步骤
  - 固定解题结构
- 掌握多种解题方法
  - 最暴力的方式（多重循环，时间复杂度高，空间复杂度高）
  - 考虑剪掉循环内多余分枝
  - 利用题目的携带条件信息，使用更加精妙的方法。（时间复杂度高低）
  - 是否可以考虑空间换时间，进一减少时间复杂度
  - &nbsp;$O(n)$、$O(nlog(n))$是追求!

## 题目通过之后，怎么做总结？

- 由于题目不是日常编码中用到的，基本不太可能直接用到工作的。
- 搞清楚，题目核心考点、难点，记住考点关键字，1-5个词语。方便后边能够快速关联难点。（最好也背下来）
- 对于题目，记下来算法步骤（理解记忆下来）
  - 主干划分为1-3个大步骤
  - 每一个大步骤按需要再划分为1-3个小步骤。如果有需要，小步骤按此规律继续拆分。
- 将核心题解结构记下来，形成自己的“瑞士军刀”，方便日后举一反三。（理解记忆下来）

## 如何面对难题目？

- 首先不要畏惧比较难的题目
- 题目难的根本是：
  - 无法将人类角度看到的问题，转换到计算机角度的 for，if 等，程序结构。
  - 无法使用程序方式获得题目最终解。（可能能够肉眼看出解，但是无法用程序解）
- 分析题目为什么难？
  - 一般最难的题，就是题目看不懂。
    - 大部分题目都是面向人类思维来描述的，看清楚字面意思远远不够，需要转换到计算机角度。
  - 即便是看了题目解题思路，有了步骤，但是还是无法独立自主解题
    - 解题结构复杂
      - for循环结构多
      - if条件多
      - 边界值特殊情况多
      - 求解核心点不容易弄清楚
- 针对难题目，肯定要花时间！不要妄图自己轻而易举搞定！
  - 要对症下药，找到痛点。
  - 先解决主要矛盾，次要矛盾不攻自破。
