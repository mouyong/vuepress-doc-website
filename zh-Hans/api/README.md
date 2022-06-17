---
pageClass: markdown
---

# 目录

[开发必读：基础资料](../guide)

## 患者

| 请求方式 | 接口路径                                        | 描述                                         |
| -------- | ----------------------------------------------- | -------------------------------------------- |
| `GET`    | /api/patients                                   | <a class="q" title="待开发">获取患者列表</a> |
| `POST`   | /api/patients                                   | 新增患者                                     |
| `PUT`    | /api/patients/`{patientId}`                     | 更新患者资料                                 |
| `POST`   | /api/patients/`patientId`/families              | 添加患者亲属信息                             |
| `GET`    | /api/patients/`patientId`/families              | 查看患者亲属列表                             |
| `GET`    | /api/patients/`patientId`/families/`{familyId}` | 查看患者亲属信息                             |