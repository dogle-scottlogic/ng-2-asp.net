import { AnimationParser } from '../animation/animation_parser';
import { CompileNgModuleMetadata } from '../compile_metadata';
import { DirectiveWrapperCompiler } from '../directive_wrapper_compiler';
import { CompileMetadataResolver } from '../metadata_resolver';
import { NgModuleCompiler } from '../ng_module_compiler';
import { OutputEmitter } from '../output/abstract_emitter';
import { StyleCompiler } from '../style_compiler';
import { TemplateParser } from '../template_parser/template_parser';
import { ViewCompiler } from '../view_compiler/view_compiler';
import { AotCompilerOptions } from './compiler_options';
import { StaticReflector } from './static_reflector';
import { StaticSymbol } from './static_symbol';
export declare class SourceModule {
    fileUrl: string;
    moduleUrl: string;
    source: string;
    constructor(fileUrl: string, moduleUrl: string, source: string);
}
export declare class AotCompiler {
    private _metadataResolver;
    private _templateParser;
    private _styleCompiler;
    private _viewCompiler;
    private _dirWrapperCompiler;
    private _ngModuleCompiler;
    private _outputEmitter;
    private _localeId;
    private _translationFormat;
    private _animationParser;
    private _staticReflector;
    private _options;
    private _animationCompiler;
    constructor(_metadataResolver: CompileMetadataResolver, _templateParser: TemplateParser, _styleCompiler: StyleCompiler, _viewCompiler: ViewCompiler, _dirWrapperCompiler: DirectiveWrapperCompiler, _ngModuleCompiler: NgModuleCompiler, _outputEmitter: OutputEmitter, _localeId: string, _translationFormat: string, _animationParser: AnimationParser, _staticReflector: StaticReflector, _options: AotCompilerOptions);
    clearCache(): void;
    compileAll(rootFiles: string[]): Promise<SourceModule[]>;
    private _compileSrcFile(srcFileUrl, ngModuleByPipeOrDirective, directives, ngModules);
    private _compileModule(ngModuleType, targetStatements);
    private _compileDirectiveWrapper(directiveType, targetStatements);
    private _compileComponentFactory(compMeta, ngModule, fileSuffix, targetStatements);
    private _compileComponent(compMeta, ngModule, directiveIdentifiers, componentStyles, fileSuffix, targetStatements);
    private _codgenStyles(fileUrl, stylesCompileResult, fileSuffix);
    private _codegenSourceModule(fileUrl, moduleUrl, statements, exportedVars);
}
export interface NgAnalyzedModules {
    ngModules: CompileNgModuleMetadata[];
    ngModuleByPipeOrDirective: Map<StaticSymbol, CompileNgModuleMetadata>;
    files: Array<{
        srcUrl: string;
        directives: StaticSymbol[];
        ngModules: StaticSymbol[];
    }>;
    symbolsMissingModule?: StaticSymbol[];
}
export declare function analyzeNgModules(programStaticSymbols: StaticSymbol[], options: {
    includeFilePattern?: RegExp;
    excludeFilePattern?: RegExp;
}, metadataResolver: CompileMetadataResolver): NgAnalyzedModules;
export declare function analyzeAndValidateNgModules(programStaticSymbols: StaticSymbol[], options: {
    includeFilePattern?: RegExp;
    excludeFilePattern?: RegExp;
}, metadataResolver: CompileMetadataResolver): NgAnalyzedModules;
export declare function loadNgModuleDirectives(ngModules: CompileNgModuleMetadata[]): Promise<void>;
export declare function extractProgramSymbols(staticReflector: StaticReflector, files: string[], options?: {
    includeFilePattern?: RegExp;
    excludeFilePattern?: RegExp;
}): StaticSymbol[];
