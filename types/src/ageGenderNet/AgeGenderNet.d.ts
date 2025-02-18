import * as tf from '../../dist/tfjs.esm';
import { TinyXception } from '../xception/TinyXception';
import { AgeAndGenderPrediction, NetOutput, NetParams } from './types';
import { NeuralNetwork } from '../NeuralNetwork';
import { NetInput, TNetInput } from '../dom/index';
export declare class AgeGenderNet extends NeuralNetwork<NetParams> {
    private _faceFeatureExtractor;
    constructor(faceFeatureExtractor?: TinyXception);
    get faceFeatureExtractor(): TinyXception;
    runNet(input: NetInput | tf.Tensor4D): NetOutput;
    forwardInput(input: NetInput | tf.Tensor4D): NetOutput;
    forward(input: TNetInput): Promise<NetOutput>;
    predictAgeAndGender(input: TNetInput): Promise<AgeAndGenderPrediction | AgeAndGenderPrediction[]>;
    protected getDefaultModelName(): string;
    dispose(throwOnRedispose?: boolean): void;
    loadClassifierParams(weights: Float32Array): void;
    extractClassifierParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("../common").ParamMapping[];
    };
    protected extractParamsFromWeightMap(weightMap: tf.NamedTensorMap): {
        params: NetParams;
        paramMappings: import("../common").ParamMapping[];
    };
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("../common").ParamMapping[];
    };
}
