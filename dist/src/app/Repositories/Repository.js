"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(model) {
        this.model = model;
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.query().insert(entity);
            return result;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.query().findById(id);
            return result;
        });
    }
    findByIdWithJoin(id, includes) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.query().findById(id).withGraphFetched(`[${includes}]`);
            return result;
        });
    }
    find(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.query().where(criteria).first();
            return result;
        });
    }
    findWithJoin(criteria, includes) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.query().where(criteria).withGraphFetched(`[${includes}]`).first();
            return result;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.model.query();
            return results;
        });
    }
    findAllWithJoin(includes) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.model.query().withGraphFetched(`[${includes}]`);
            return results;
        });
    }
    findAllWithCriteria(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.model.query().where(criteria).select();
            return results;
        });
    }
    findAllWithCriteriaAndJoin(criteria, includes) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.model.query().where(criteria).withGraphFetched(`[${includes}]`);
            return result;
        });
    }
    update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const save = yield this.model.query().patchAndFetchById(id, entity);
            return save;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.query().deleteById(id);
        });
    }
}
exports.Repository = Repository;
